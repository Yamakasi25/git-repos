

export class Search {
   constructor(view, api) {
      this.view = view
      this.api = api

      this.view.searchInput.addEventListener('keyup', this.debounce(this.searchRepos.bind(this), 800))
   }
   
    searchRepos() {
      if(this.view.searchInput.value) {
         this.clearRepos();
      this.api.searchRepos(this.view.searchInput.value).then((res) => {
         if(res.ok) {
            res.json().then(res => {
               res.items.forEach(repos => {
                  this.view.createRepos(repos)
               })
            })
         } else {
            
         }  
      })
   } else {
      this.clearRepos()
   }
   }

   clearRepos() {
      this.view.reposList.innerHTML = '';
   }

   debounce(f, ms) {
      let isCooldown = false;
      return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
      };
    
    }
   
}
