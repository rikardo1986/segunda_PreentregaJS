// Logueo de admin
let user = prompt("Por favor, ingrese el usuario:");

if (user === "admin") {
    alert("Bienvenido Administrador");

    // Menú principal para navegar entre funciones
    function menuPrincipal() {
        let opcion = prompt(`Elija una opción:
        1. Agregar Producto
        2. Modificar Producto
        3. Buscar Producto por Usuario
        4. Eliminar producto
        5. Exportar Datos
        6. Salir`);

        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                modificarProducto();
                break;
            case "3":
                buscarProductoPorUsuario();
                break;
            case "4":
                eliminarProducto();
                break;
            case "5":
                exportarDatos();
                break;
            case "6":
                alert("Saliendo del sistema...");
                break;
            default:
                alert("Opción no válida.");
                menuPrincipal();
        }
    }

    // Array de productos 
    let inventario = [];

    // Función para agregar productos
    function agregarProducto() {
        let productoTipo = prompt(`Elija el tipo de producto que desea agregar:
        1. Notebook
        2. Cámara web
        3. Disco duro
        4. Parlantes
        5. Otro insumo`);

        let marca = prompt("Ingrese la marca del producto:");
        let modelo = prompt("Ingrese el modelo del producto:");
        let serie = prompt("Ingrese el número de serie del producto:");
        let mac = prompt("Ingrese la dirección MAC (si aplica):");
        let ip = prompt("Ingrese la dirección IP (si aplica):");
        let estado = prompt("Ingrese el estado del producto (Nuevo/Usado):");
        let usuario = prompt("Ingrese el usuario asignado:");
        let uso = prompt("Ingrese el uso del producto:");

        // los producto se almacenan como objetos. 
        let nuevoProducto = {
            tipo: obtenerNombreProducto(productoTipo), //se invoca funcion auxiliar y la variable tipo de producto
            marca: marca,
            modelo: modelo,
            serie: serie,
            mac: mac,
            ip: ip,
            estado: estado,
            usuario: usuario,
            uso: uso
        };

        inventario.push(nuevoProducto); // nuevo producto se almacena en el array inventario
        alert("Producto agregado correctamente: " + mostrarProducto(nuevoProducto));
        menuPrincipal();
    }

    // Función para modificar productos.
    function modificarProducto() {
        let buscarSerie = prompt("Ingrese el número de serie del producto que desea modificar:");
        let productoEncontrado = inventario.find(producto => producto.serie === buscarSerie); //find para buscar un producto especifico dentro del array inventario

        if (productoEncontrado) {
            alert("Producto encontrado: " + mostrarProducto(productoEncontrado));

            productoEncontrado.marca = prompt("Ingrese la nueva marca:", productoEncontrado.marca);
            productoEncontrado.modelo = prompt("Ingrese el nuevo modelo:", productoEncontrado.modelo);
            productoEncontrado.mac = prompt("Ingrese la nueva dirección MAC (si aplica):", productoEncontrado.mac);
            productoEncontrado.ip = prompt("Ingrese la nueva dirección IP (si aplica):", productoEncontrado.ip);
            productoEncontrado.estado = prompt("Ingrese el nuevo estado (Nuevo/Usado):", productoEncontrado.estado);
            productoEncontrado.usuario = prompt("Ingrese el nuevo usuario asignado:", productoEncontrado.usuario);
            productoEncontrado.uso = prompt("Ingrese el nuevo uso:", productoEncontrado.uso);

            alert("Producto modificado correctamente: " + mostrarProducto(productoEncontrado));
        } else {
            alert("Producto no encontrado.");
        }
        menuPrincipal();
    }

    // Función para buscar productos por usuario
    function buscarProductoPorUsuario() {
        let usuarioBuscado = prompt("Ingrese el usuario para buscar productos:");
        let productosUsuario = inventario.filter(producto => producto.usuario === usuarioBuscado); //utilizamos fitler para filtrar un producto especificodentro del array inventario

        if (productosUsuario.length > 0) {
            let resultado = "Productos encontrados para el usuario " + usuarioBuscado + ":\n";
            productosUsuario.forEach((producto, index) => {
                resultado += `Producto ${index + 1}:\n${mostrarProducto(producto)}\n`;
            });
            alert(resultado);
        } else {
            alert("No se encontraron productos para el usuario: " + usuarioBuscado);
        }
        menuPrincipal();
    }

    // Función auxiliar para obtener el nombre del producto basado en el número de caso
    function obtenerNombreProducto(numeroProducto) {
        switch (numeroProducto) {
            case "1":
                return "Notebook";
            case "2":
                return "Cámara web";
            case "3":
                return "Disco duro";
            case "4":
                return "Parlantes";
            case "5":
                return "Otro insumo";
            default:
                return "Desconocido";
        }
    }

    // Función auxiliar para mostrar los detalles de un producto
    function mostrarProducto(producto) {
        return `Tipo: ${producto.tipo}\nMarca: ${producto.marca}\nModelo: ${producto.modelo}\nSerie: ${producto.serie}\nMAC: ${producto.mac || 'N/A'}\nIP: ${producto.ip || 'N/A'}\nEstado: ${producto.estado}\nUsuario: ${producto.usuario}\nUso: ${producto.uso}`;
    }


    // eliminar productos con un ciclo for
        function eliminarProducto() {
            let productos = ['Notebook', 'Cámara web', 'Disco duro', 'Parlantes', 'Otro insumo'];
            let mensaje = "Elija el número del producto que desea eliminar:\n";
        
            for (let i = 0; i < productos.length; i++) {
                mensaje += (i + 1) + ". " + productos[i] + "\n";
            }
        
            let producto = prompt(mensaje);
        
            let index = parseInt(producto) - 1;
            if (index >= 0 && index < productos.length) {
                alert("Producto eliminado correctamente: " + productos[index]);
            } else {
                alert("Opción no válida");
            }
            menuPrincipal();
        }

        function exportarDatos() {
            let fecha = prompt("Elija la fecha desde cuando desea descargar un reporte (Formato: DD-MM-AAAA):");

            alert("Datos exportados desde la fecha: " + fecha);
            menuPrincipal();
        }

        menuPrincipal();

} else {
    alert("Usuario de Administrador incorrecto");
}
