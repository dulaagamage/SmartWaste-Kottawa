const { createApp } = Vue;
createApp({
  data() {
    return {
      newName: '',
      newEmail: '',
      newMessage: '',
      feedbacks: []
    };
  },
  methods: {
    addFeedback() {
      if (this.newName && this.newEmail && this.newMessage) {
        const newEntry = {
          name: this.newName,
          email: this.newEmail,
          message: this.newMessage,
          date: new Date().toLocaleString()
        };
        this.feedbacks.unshift(newEntry); 
        this.newName = '';
        this.newEmail = '';
        this.newMessage = '';
      }
    },

    clearFeedbacks() {
      this.feedbacks = [];
    }
  }
}).mount('#feedbackApp');
