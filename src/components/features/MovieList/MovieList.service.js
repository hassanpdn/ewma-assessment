import apiClient from '@/api'
import { MOVIE_LIST } from '@/api/resources/MovieList'

export default {
      getMovies (page = 1) {
            return apiClient(`${MOVIE_LIST}`, { params: { page: page } })
      }
}