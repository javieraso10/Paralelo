pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/javieraso10/Paralelo.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key b0c1fb6a-3f82-408d-81e1-f1b93511908e  --parallel'
                    
                    }
                }
        stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/javieraso10/Paralelo.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key b0c1fb6a-3f82-408d-81e1-f1b93511908e  --parallel'
                    
                    }
                }
            }

             
        }

    }
            
}