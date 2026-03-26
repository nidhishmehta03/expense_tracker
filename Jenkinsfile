pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/nidhishmehta03/expense_tracker.git'
            }
        }

        stage('Build') {
            steps {
                echo "Building project"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying project"
            }
        }

    }
}
