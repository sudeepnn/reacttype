export type salesdata={
    name:string,
    cost:number,
    creditCard:boolean
}
export type salesdatares={
    name:string,
    cost:number,
   
}
export const caluculatetotal=(salesdata:salesdata[]):number=>{
    return salesdata.reduce((acc,sale)=>acc+sale.cost,0)
   
}

export const calcolatecashcost=(salesdata:salesdata[]):number=>{
    const salesfilter=salesdata.filter(sale=>!sale.creditCard)
    return caluculatetotal(salesfilter)
}
export const calcolatecashlesscost=(salesdata:salesdata[]):number=>{
    const salesfilter=salesdata.filter(sale=>sale.creditCard)
    return caluculatetotal(salesfilter)
}
export const getuserwithmaxcost=(salesdata:salesdata[]):salesdatares|null=>{
    if(salesdata.length==0) return null
    const maxit=salesdata.reduce((max,obj)=>max.cost>obj.cost?max:obj)
    const res={
        name:maxit.name,
        cost:maxit.cost,
    }
    return res
}


 export type playertype={
    name:string,
    dis:string
}

const playerlist:playertype[]=[
    {name:'Player1',dis:'dis1'},
    {name:'Player2',dis:'dis2'},
    {name:'Player3',dis:'dis3'},
]

export const getallplauyerlist=():playertype[]=>{
 return playerlist
}
export const addplauyerlist=(player:playertype):playertype[]=>{
    playerlist.push(player)
 return playerlist
}

export const updateplauyerlist=(player:playertype):playertype[]=>{
    const pla=playerlist.find(p=>p.name==player.name)
    if(pla==null){
       throw new Error('player not found')
    }
    playerlist.splice(playerlist.indexOf(pla),1)
    pla.dis=player.dis
    playerlist.push(pla)
    return playerlist;
}

export const deleteplauyerlist=(name: string):playertype[]=>{
    const pla=playerlist.find(p=>p.name==name)
    if(pla==null){
       throw new Error('player not found')
    }
    playerlist.splice(playerlist.indexOf(pla),1)
    return playerlist;
}