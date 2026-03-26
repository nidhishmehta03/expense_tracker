pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/nidhishmehta03/expense_tracker.git'
            }
        }

        stage('Build') {
            steps {
                echo "Project build started"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deployment step running"
            }
        }

    }
}
