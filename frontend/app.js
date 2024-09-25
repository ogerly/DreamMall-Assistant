const { createApp, ref, onMounted } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
    setup() {
        const messages = ref([]);
        const userInput = ref('');
        const isLoading = ref(false);

        const sendMessage = async () => {
            if (userInput.value.trim() === '') return;

            messages.value.push({ sender: 'You', text: userInput.value });
            isLoading.value = true;

            try {
                const response = await axios.post('http://localhost:3000/chat', { message: userInput.value });
                messages.value.push({ sender: 'Assistant', text: response.data.reply });
            } catch (error) {
                console.error('Error:', error);
                messages.value.push({ sender: 'Assistant', text: 'Sorry, I encountered an error.' });
            } finally {
                isLoading.value = false;
            }

            userInput.value = '';
        };

        const clearChat = () => {
            messages.value = [];
        };

        onMounted(() => {
            messages.value.push({ sender: 'Assistant', text: 'Hello! How can I assist you today?' });
        });

        return {
            messages,
            userInput,
            isLoading,
            sendMessage,
            clearChat
        };
    }
});

app.use(vuetify).mount('#app');