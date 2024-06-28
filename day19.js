

//Ennumerate Concept


     const detail1={
        name:'peter',
        uid:48,
        course:'JS',
        age:99,
        Designation:'spider Man',
        
    }

    for(const key in detail1) {
        if(detail1.hasOwnProperty(key))
        console.log(key+": "+detail1[key]);
    }