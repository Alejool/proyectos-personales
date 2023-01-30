



const form=document.querySelector('.form');
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const telefono=document.querySelector('#telefono');
const mensaje=document.querySelector('#mensaje');
const nombre=document.querySelector('#nombre');
const date=document.querySelector('#date');
const cliente=document.querySelector('#cliente');
const categorias=document.querySelector('#categorias');



form.addEventListener('submit', validarform);





function validarform(e){
  e.preventDefault();

  if(nombre.value==="" || email.value==="" || telefono.value==="" || mensaje.value==="" || date.value==="" || cliente.value==="" || categorias.value===""){

    mostrarAlerta('todos los campos son obligatorios', 'error');
    return;
  }
  mostrarAlerta('enviado correctamente');

}

function mostrarAlerta(mensaje, tipo){

  const alerta=document.createElement('P');
  const alertaS=document.querySelector('.alerta')


  if(!alertaS){
    if(alerta){
      if(tipo){
     
        alerta.classList.add('error', 'contenedor', 'mt-4', 'alerta');
        
      }else {
        alerta.classList.add( 'contenedor', 'mt-4', 'alerta', 'correcto')
        form.reset();
      }
      alerta.textContent=mensaje;
      form.appendChild(alerta);
      alerta.classList.add('.alerta');
    
     
    
      setTimeout(()=>{
        alerta.remove();
      },2000);}
  }

 
  


  
  
}