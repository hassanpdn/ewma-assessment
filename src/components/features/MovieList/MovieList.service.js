import apiClient from '@/api'

export default {
      getMovies (page = 1) {
            return apiClient(`/discover/movie`, { params: { page: page } })
      }
}