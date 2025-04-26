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

    const resetTest = ()=>{
        answerCount.value = 0;  
        correctAnswer.value = 0;  
        testStatus.value = 0;  
    }


    return { tests, loading, error, fetchTests, questionCount, setQuestionCount, answerCounter, setCorrectAnswer, testStatus, correctAnswer, questionCount, resetTest,
        setTestId, testId
    };
});
