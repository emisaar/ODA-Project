# Asistente Digital para Servicio al Cliente

## Descripción del Proyecto
Este proyecto consiste en la creación de un asistente digital impulsado por distintas tecnologías que ofrece la nube de Oracle, con el objetivo de transformar radicalmente la forma en que las empresas interactúan con sus proveedores, redefiniendo la experiencia de usuario y marcando un hito en la optimización de procesos.

## Requerimientos Técnicos

### 1. Autonomous Transaction Processing (ATP) Database
- Se requiere una instancia de Autonomous Database para almacenar la información del proyecto. 
- La conexión con el backend se realiza mediante TLS. Se sugiere identificar el "string connection" en el apartado de "Database connection". 

### 2. ElasticSearch
- Contar con una cuenta (puede ser gratuita) de ElasticSearch para realizar la indexación.

### 2. Buckets de Almacenamiento
- Contar con al menos una Bucket para almacenar archivos relacionados con el proyecto, como documentos o imágenes.
- Configuración de permisos y políticas de acceso para garantizar la seguridad de los archivos almacenados.

### 3. Document Understanding
- Implementación de modelos de Document Understanding para la clasificación y extracción de valores en los documentos.
- Configuración de permisos y políticas de acceso para garantizar la seguridad de los archivos almacenados.

### 4. Digital Assistant (ODA)
- Contar una instancia de Digital Assistant para cargar la habilidad en el entorno de trabajo.

### 5. Virtual Machine (VM)
- Configuración de una Máquina Virtual para alojar el seridor del asistente digital. Se recomienda utilizar una instancia con las siguientes características:
Shape: VM.Standard.E2.1.Micro
OCPU count: 1
Network bandwidth (Gbps): 0.5
Memory (GB):1
Local disk: Block storage only

* Nota: Es importante añadir la IP de la Máquina Virtual a la lista de control de accesos de la base de datos para que esta implementación funcione correctamente. En caso de que no se realice este paso, no se podrá establecer la conexión de la ATP con la VM.