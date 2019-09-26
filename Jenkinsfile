pipeline {
  agent any
 
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/abhi1122/restaurant-ui'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('Install pm2') {
      steps {
        sh 'npm install pm2 -g'
      }
    }
     
    stage('Start') {
      steps {
         sh 'npm start'
      }
    }      
  }
}
