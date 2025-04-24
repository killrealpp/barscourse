import { defineStore } from 'pinia';
import { ref } from 'vue';
import testsData from '@/assets/tests.json'; // Импортируем локальный JSON файл

export const useTestsStore = defineStore('tests', () => {

    const tests = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchTests = async () => {
        loading.value = true;
        error.value = null;

        try {
            // Для теста используем локальный JSON вместо API
            tests.value = testsData.map(test => ({
                id: test.Id, // id теста
                question: test.Name, // Вопрос
                options: test.Answers.map(answer => ({
                    text: answer.text, // Текст ответа
                    correct: answer.correct // Добавляем правильный ответ
                }))
            }));
        } catch (err) {
            error.value = 'Ошибка при загрузке тестов';
            console.error(err);
        } finally {
            loading.value = false;
        }
    };

    return {
        tests, loading, error, fetchTests
    };
});
