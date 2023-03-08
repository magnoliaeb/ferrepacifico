export default function (context) {
    let pages = [
        'iniciar-sesion',
        'registro',
        'recuperar-contrasena',
    ]

    if(pages.includes(context.route.name)) {
        if(! context.app.$app.$auth.guest) {
            context.redirect({ name: 'index' })
        }
    }
}