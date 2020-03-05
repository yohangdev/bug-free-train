import axios from 'axios'
import { appConfig } from '@/config'

const http = axios.create({
  baseURL: 'https://sapawarga.jabarprov.go.id/api/v1/',
  headers: { Authorization: `Bearer ${appConfig.key}` }
})

export default http
