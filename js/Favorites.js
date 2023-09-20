export class Favorites{
    constructor(root){  // This root its like the div    APP    i am using the html into this div and using como parametro
        this.root = document.querySelector(root)
        this.tbody = this.root.querySelector('table tbody');
        this.load()     // para cada elemento { object literals } que eu colocar dentro da array execute CreateRow()
    }
}

export class FavoritesView extends Favorites{

    constructor(root){

        super(root) //  DENTRO SO SUPER SO AQUELE VALOR QUE VAI MUDAR 

        console.log(this.root)

        this.update()
    }

    load(){
// vai estanciar esta array com os object literals para poder executar em cada objeto funções de array like
        this.entries = [
            {
                loguin: 'maykbrito',
                name:"Mayk Brito" ,
                public_repos: "76", 
                followers: '120000' 
            }
            ,
            {
                loguin: 'diego3g',
                name:"Diego Fernandes" ,
                public_repos: "76", 
                followers: '120000' 
            }
        ]

    }

    update(){
        this.removeAlltr()

        // depois de executado o load() que crie novas tr para cada elemento da array de objetos entries

        this.entries.forEach(      user => { 
            const row = this.createRow() ; 
            console.log(row) 
            row.querySelector('.user img').src = `https://github.com/${user.loguin}.png`; 
            row.querySelector('.user img').alt=`Image de ${user.name}`

            row.querySelector('.user  p').textContent = user.name;
            row.querySelector('.user span').textContent = user.loguin;
            row.querySelector('.Repositories').textContent = user.public_repos;
            row.querySelector('.Followers').textContent = user.followers;
            row.querySelector('.remove').onclick = () => {console.log(`apagar :${row}:`)};

            this.tbody.append(row);
        }   
                            
        )

    }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `<td class="user">
            <img src="https://github.com/ThiagoMassenoMaciel.png" alt="Image mde perfil do respectivo usuário que ja foi adicionado nesta Pagina de favoritos">
            <a href="https://github.com/ThiagoMassenoMaciel">
                <p>ThiagoMassenoMaciel</p>
                <span>Thiago Masseno Maciel</span>
            </a>
        </td>
        <td class="Repositories">64</td>
        <td class="Followers">22</td>
        <td>
            <button class="remove" >&times;</button>
        </td>`

        return tr
    }

    removeAlltr(){
        this.tbody.querySelectorAll('tr').forEach( (tr)=> {  tr.remove() } ) ;
    }
}