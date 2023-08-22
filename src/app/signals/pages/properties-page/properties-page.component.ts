import { Component, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id:1,
    email:'geoge.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar:'https://reqres.in/img/faces/1-image.jpg'
  })

/* El agregar keyof hace que no se pueda recibir cualquier propiedad en el input si no que de forma obligada tienen
que ser las propiedades que estan definidas en este caso del USer */
  onFieldUpdated(field:keyof User, value:string){
    
    // this.user.set({
    //   ...this.user(),
    //   [field]:value
    // })

/*     Mutate es un dispirador de efectos, esto quiere decir que utilizando este ejemplo
    cualquier cosa que se escriba sobre cualquier input va a disparar el efecto y en este caso la propiedad o value
    firsr_name a penas se toque cualquier cosa de los input su valor cambiara enseguida a hola mundo
    this.user.mutate(current => {
      current.first_name = 'Hola mundo'
    }) */


    
/*     this.user.mutate(current => {
      switch (field) {
        case 'email':
        current.email = value;
        break;
        case 'first_name':
        current.first_name = value;
        break;
        case 'last_name':
        current.last_name = value;
        break;
      }
    }) */

    this.user.update( current =>{
      return {
        ...current,
        [field]: value
      }
    })

    /* Las tres anteriores son formas de hacer lo mismo, pero en el caso de que exista un numero se tendria que hacer la conversion a number
    porque lo que se esta recibiendo en todos los campos son string */

  }
}
