import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';


export const useTestsStore = defineStore('tests', () => {
    const loading = ref(false);
    const error = ref(null);
    const tests = ref([]);

    const fetchTests = async () => {
        loading.value = true;
        error.value = null;

        try {

            const response = await axios.get('src/assets/test.json')

            tests.value = [...response.data.tests]

            // console.log('первый', tests[0].name)
            // console.log('второй', tests[1].name)
            // console.log('третий', tests[2].name)
            // console.log(tests.value)

            // const response = await axios({
            //     method: 'GET', 
            //     url: 'https://f274-84-17-55-155.ngrok-free.app/api/Block/1',
            //     withCredentials: true, 
            // });

            // tests.value = [...response.data.tests]

            // console.log(tests.value)
            


            // // console.log('response', response)

            // const blockData = response.data
            // tests.value = blockData.tests
            // console.log('tests.value', tests.value)

            // name.value = tests.value[0]?.name

            // questions.value = tests.value[0]?.questions;

            // console.log('Вопросы первого теста:', questions.value);



            // questions.value = tests.value.map(test => test.questions)
            // console.log('то что мне нужно', questions.value)
            


            // const response = await fetch('https://f274-84-17-55-155.ngrok-free.app/api/Block/1',{
            //     method: 'GET',
            //     mode: 'cors', // ВАЖНО!
            //     credentials: 'include'
            // });

            // console.log(response)

            // if (blockData && blockData.tests) {
            //     tests.value = blockData.tests.map(test => ({
            //         id: test.id, 
            //         testName: test.name, // Название теста
            //         questions: test.questions.map(question => ({
            //             questionId: question.id, // id вопроса
            //             questionText: question.name, // Текст вопроса
            //             options: question.answers.map(answer => ({
            //                 answerText: answer.name, // Текст ответа
            //                 isCorrect: answer.isRight // Проверка правильности ответа
            //             }))
            //         }))
            //     }));
            // }
        } catch (err) {
            error.value = 'Ошибка при загрузке тестов';
            console.error(err);
        } finally {
            loading.value = false;
        }
    };

    return { tests, loading, error, fetchTests };
});
