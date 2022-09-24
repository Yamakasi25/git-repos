const URL = 'https://api.github.com/'
const REPOS_PER_PAGE = 5
export class Api {
   
   async searchRepos(value) {
      return await fetch(`${URL}search/repositories?q=${value}&per_page=${REPOS_PER_PAGE}`)
   }

   
}
