export default function (context) {
    let pages = [
        'agregar-direccion',
        'editar-perfil',
        'mi-perfil'
    ]

    if(pages.includes(context.route.name)) {
        if(! context.app.$app.$auth.check) {
            return context.redirect({ name: 'iniciar-sesion' })
        }

        switch (context.app.$app.$auth.user.status) {
            case 'inactive':
                console.log('usuario baneado')
                context.redirect({ name: 'iniciar-sesion' })
            break;
        }
    }
}