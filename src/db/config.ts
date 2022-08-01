import dotenv from 'dotenv'
dotenv.config()

export default {
    mongoDB: {
      URI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      }
}


// {
//   "type": "service_account",
//   "project_id": "project-backend-10cad",
//   "private_key_id": "e5f1a619603bb4bcca92891befaae5bbd9bdab11",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDV38QfHPi/IR6v\nMt4mdUHkK8TaJALQgFyFXOXeAc78XO3qaBKl8jLXFBqqqD5yJhRnc1d5vuUGNuIg\nG06KeAjoDM0qAVsDZPx3leMO+fcFEAQCCXC/qAKQeGkw4v2ypXyQDDz63Y0YwAAm\n4Ze9pvEyAuAthmPGlLcdCd+C30oYJftc9Avmr1xgxnI9Y6grX71FcO07IO2jTJ1v\n7dfnf8O05rw14feTyGhp1mgL8paHzx6ktb+1YGpuGhFFlke7iLfn57YdCD/K9fJb\nGq2Zkvyeb+QxN0dtPKNdt15VjeHay/XaHHHll5cb4Fy0OkX9Dd/KNXwTcyLAtLmz\nOAjfaARJAgMBAAECggEAFsZ8eR+5sYjSXq/ZDllgSe8LSHubPR7eO2l4JRsmMqOm\nxlaM3dUb6uF+MXw3IirB835J63ITq4S+sdKWm5JKyINMedOpIIRpikaQ5nBiCMz6\n0Ei3FAHNPBtGgGk7wQF0cVaMS965/s+7dGiDozOa7ct2mgJ8r5H4qgP6JFKo7kcz\nNIs1hZhj2GeEM9fo5tRfqNF75vbJutNf4x/ixle+2+p22tmGbwqdAPHu/g/Ym+E4\niBvRX7LB/hyPLHkP7abCUBvAUgzdIar5KhWV/D8Uz4rf9QbshAJnYH2rDhilb+oj\nrYiZZLjE/RPPMwaB6EnOJRkAH460AUdzY5enmjlDAQKBgQD7q3GO+MNZmS/ra80h\nO0NwjtLknv1CBADvdVHYJyAGQg64eGe4VUJ9KBhcqNLkNcWgTmfHMtz/3ki749Jy\nyn6ykmPf/Y0VxeeRgRElabKg0s3X2flu8fEYE23CkfsVVSSqKmQUCLBOXzaibej8\nDzcQ4D5mGWJ9B/rnRR2sfEQ3qQKBgQDZjdcStP7ZVk1l8FwQ8XUpMtoqMZdNN+MA\nT3+l35uF/6bxdhTZW+c7tyl8n4HnqlXsL6EliSXaaIxcpMX7NfmgIn0bpELjWgsV\nSSeSUTeojACO22jHnE+2LLh5/SyfFwBDXyhSOR1c/aIf2gtpvUiKpzx6paFx9vUl\n6mDRoC7LoQKBgQDr3xg0ZoQ4gnE+FTARWEjxwnp32WcFq1jxFSTbEHhcRSckz3xu\ncEI7qQuENJpLVvZdM37iXJJyoPPMXU7NVWn/lWJT+YB0iqJpZe0bAoBvaIOSLXIx\nAEL1TKhPdqA7sywE7GwVtrr/CQ/clmSJcP0sLO9uo5YCFyuZ+9Y+5czN2QKBgAvn\naPdLFA7MXBvR1RfQPnrsn2djo0XEYxVnRDLNU3M3k+jubyGdl796vDhnefI1LdJo\noMavBHU490UydurR/0C14maazFYoXSbjA9lLvGHqlzU56DfT48CyHb3/Dmv+FDOb\nh1dIbMTj0/UuNyWoB8oecH69hWH5A1z5wCZ4P1dBAoGBALgpiHtNw+R7GAKVFoYs\nXrrTBLuVZW8h1pTB2bU8/SHQTdRtlXcQlJBxu2QvM+KM8nRvKzoZ/ISDq9s2rtd8\na0qabDIATcgBh6M2l0AMj9H1oMsBf5jbPKxcaV+ooZcF7BGNV2T8MSqGur5PgFqy\n2sS+yUjh6fTNi/RPTygJa6Ae\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-g1msg@project-backend-10cad.iam.gserviceaccount.com",
//   "client_id": "104328515242250757267",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-g1msg%40project-backend-10cad.iam.gserviceaccount.com"
// }