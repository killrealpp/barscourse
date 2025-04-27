import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';


export const useTestsStore = defineStore('tests', () => {
    const loading = ref(false);
    const error = ref(null);
    const tests = ref([]);
    const questionCount = ref(0)
    const answerCount = ref(0)
    const correctAnswer = ref(0)
    const testStatus = ref(0)
    const testId = ref(null)

    const oneTestStatus = ref(null)
    const twoTestStatus = ref(null)
    const threeTestStatus = ref(null)

    const spanWidth = ref(0)
    const lastProgressStatus = ref(null)


    const fetchTests = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await axios.get('src/assets/test.json')
            tests.value = [...response.data.tests]
        } catch (err) {
            error.value = 'Ошибка при загрузке тестов';
            console.error(err);
        } finally {
            loading.value = false;
        }
    };

    const setQuestionCount = (count)=>{
        questionCount.value = count
        console.log('длина в стор', questionCount.value)
    }

    const setTestId = (id)=>{
        console.log(id)
        
        if(id === 0){
            testId.value = 6
        }
        if(id === 1){
            testId.value = 9
        }
        if(id === 2){
            testId.value =10
        }
        console.log(testId.value)
    }

    const setCorrectAnswer = ()=>{
        correctAnswer.value += 1
    }

    const answerCounter = ()=>{
        if (answerCount.value < questionCount.value - 1){
            answerCount.value = answerCount.value + 1 
            console.log(answerCount.value)
        } else {
            console.log('ответили на все вопросов')
            console.log('Правильных ответов: ', correctAnswer.value)
            console.log('сумма', questionCount.value)
            if(correctAnswer.value >= Math.round(questionCount.value * 0.7)){
                testStatus.value = 1
                console.log('молодец пять')
            } else{
                testStatus.value = 2
                console.log('молодец 2')
            }

            getId()
        }
    }

    const getId = async ()=>{
        // const tgId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        const tg_id = 1234

        try{    
            const response = await axios.post('https://f274-84-17-55-155.ngrok-free.app/api/Users/authenticate', {
                tgId: tg_id.toString()
            })
            const id = response.data.id
            setResult(id)
        } catch (e){
            console.error('Ошибка при получении id',e)
        }
    }

    const setResult = async (id)=>{
        try{
            const response = await axios.post('https://f274-84-17-55-155.ngrok-free.app/api/TestResult',{
                userId: id,
                testId: testId.value,
                countRight: correctAnswer.value
            })
            console.log(response.data)
        }catch(e){
            console.error('ошибка при отправке результатов', e)
        }
    } 

    const getIdWithProg = async()=>{
        const tg_id = 1234
        try{    
            const response = await axios.post('https://f274-84-17-55-155.ngrok-free.app/api/Users/authenticate', {
                tgId: tg_id.toString()
            })
            const id = response.data.id
            getResult(id)
        } catch(e){
            console.error('ошибка при получении id ', e)
        }
    }

    const getResult = async (id) => {
        try {
            const response = await axios.get(`https://f274-84-17-55-155.ngrok-free.app/api/TestResult/user/${id}`, {
                headers: {
                    'Content-Type': 'application/json', 
                },
                withCredentials: true, 
            });
            console.log('до фильтрации',typeof response.data);

            const onefilterData = response.data.filter(item => item.testId === 6);
            const twofilterData = response.data.filter(item => item.testId === 9);
            const threefilterData = response.data.filter(item => item.testId === 10);

            setTestStatus(onefilterData, oneTestStatus, 5)
            setTestStatus(twofilterData, twoTestStatus, 5)
            setTestStatus(threefilterData, threeTestStatus, 5)
        } catch (e) {
            console.error('Ошибка при получении результатов:', e);
        }
    }


    const setTestStatus = (testData, testStatus, questNum)=>{
        if (testData.length === 0){
            testStatus.value = false
        } else{
            const maxCount = testData.reduce((max, current) =>{
                return (current.countRight > max.countRight) ? current : max
            })
            if(maxCount.countRight > Math.round(questNum * 0.7)){
                testStatus.value = true
                getWidthSpan()
            } else{
                testStatus.value = false
            }
        }
    }

    const getWidthSpan = ()=>{
        spanWidth.value += 1
    }

    const resetTest = ()=>{
        answerCount.value = 0;  
        correctAnswer.value = 0;  
        testStatus.value = 0;  
    }


    return { tests, loading, error, fetchTests, questionCount, setQuestionCount, answerCounter, setCorrectAnswer, testStatus, correctAnswer, questionCount, resetTest,
        setTestId, testId, getIdWithProg, oneTestStatus, twoTestStatus, threeTestStatus, spanWidth, lastProgressStatus
    };
});
