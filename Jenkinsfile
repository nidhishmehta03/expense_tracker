pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/nidhishmehta03/expense_tracker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t finance-tracker .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:8080 finance-tracker'
            }
        }

    }
}
