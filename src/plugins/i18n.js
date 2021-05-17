import Vue from 'vue'
import VueI18n from 'vue-i18n'

var messages = {    
    "en": {     
       "placeholdersMemorial" : {
            "first_name" : "Raghav",
            "last_name" : "Rao",
            "gender" : "Male",
            "birth_date" : "Mar 22 1960",
            "passing_date" : "Apr 24 2021",
            "location" : "Hyderabad, Telangana",
            "prompt" : "One thing he loved most about life...",
            "prompt_response" : "...was his family."
        },
    }
}

Vue.use(VueI18n)

export const i18n = new VueI18n({    
                        locale: 'in', 
                        fallbackLocale: 'en', 
                        messages,
                    });
