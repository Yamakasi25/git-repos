export class View {
   constructor(api){
this.app = document.getElementById('app');
this.api = api


      this.searchLine = this.createElement('div', 'serch-line');
      this.searchInput = this.createElement('input', 'search-input');
      this.searchLine.append(this.searchInput);


      this.reposWrapper = this.createElement('div', 'repos-wrapper')
      this.reposList = this.createElement('ul', 'repos')
      this.reposWrapper.append(this.reposList)


      this.main = this.createElement('div', 'main');
      this.main.append(this.reposWrapper)

      this.choiceWrapper = this.createElement('div', 'choice-wrapper')
      this.choiceList = this.createElement('ul', 'choices')
      this.choiceWrapper.append(this.choiceList)
    

      this.app.append(this.searchLine);
      this.app.append(this.main)
      this.app.append(this.choiceWrapper)
   }
   createElement(elementTag, elementClass) {
      const element = document.createElement(elementTag);
      if(elementClass) {
         element.classList.add(elementClass)
      }
      return element
   }

   createRepos(reposData) {
      const reposElement = this.createElement('li', 'repos-prev')
     reposElement.addEventListener('click', () => {
      this.searchInput.value = ''
      this.reposList.innerHTML = '';
      let result = this.createElement('li', 'result-prev')
      result.innerHTML = `<div class='result-text text-top'> Name: ${reposData.name}</div> <div class='result-text'>Owner: ${reposData.owner.login}</div> <div class='result-text'>Stars: ${reposData.stargazers_count}</div>`
      this.choiceList.append(result)
      const delate = this.createElement('li', 'result-remove')
     delate.innerHTML = `<svg class='removeImg' width="46" height="42" viewBox="0 0 46 42">
     <image href="/img/Vector 7.svg"></image>
     <image href="/img/Vector 8.svg"></image>
  </svg>`
     result.append(delate)
    delate.addEventListener('click', () => result.remove()) 
     })
     
      reposElement.innerHTML = `<span class='repos-prev-name'>${reposData.name}</span>`;  
      this.reposList.append(reposElement)
     
   }

   } 

