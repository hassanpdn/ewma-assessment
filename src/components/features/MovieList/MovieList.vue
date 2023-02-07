<script>
 import MovieService from '@/components/features/MovieList/MovieList.service';

export default {
      setup() {
            // const movieList = ref(null);
            MovieService.getMovies().then(res => console.log(res)).catch(err => console.log(err));
            // return {movieList}
      }
}

</script>

<template>
      <div>123123123</div>
</template>
