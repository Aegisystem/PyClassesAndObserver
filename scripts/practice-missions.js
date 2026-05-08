export const PRACTICE_MARKER = "python-classes-practice";

export const missions = [
  {
    id: 1,
    title: "Preparar entorno virtual",
    summary: "Crearas un entorno virtual local y documentaras como instalar las dependencias.",
    why: "El entorno virtual separa las dependencias de este proyecto de las instaladas en tu sistema.",
    body: `## Objetivo
Crear y activar un entorno virtual para trabajar la practica de Python.

## Pasos sugeridos
- En tu computador, ejecuta \`python3 -m venv .venv\`.
- Activa el entorno con \`source .venv/bin/activate\` o con \`.venv\\Scripts\\activate\` en Windows.
- Instala dependencias con \`pip install -r requirements.txt\`.
- Edita \`README.md\` y revisa la seccion \`Crear el entorno virtual\` con los comandos que usaste.
- Haz commit y push de tu cambio.

## Criterio de cierre
El workflow cerrara este issue cuando el README documente el entorno virtual y las dependencias de la practica.`
  },
  {
    id: 2,
    title: "Crear estructura del paquete Python",
    summary: "Crearas los archivos base donde viviran las clases de la practica.",
    why: "Una estructura de paquete ordenada evita imports fragiles y facilita ejecutar pruebas.",
    body: `## Objetivo
Crear la estructura principal del codigo Python.

## Pasos sugeridos
- Crea \`src/observer_practice/__init__.py\`.
- Crea \`src/observer_practice/observer.py\`.
- Crea \`src/observer_practice/suscriptores.py\`.
- Crea \`src/observer_practice/canal.py\`.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando existan los archivos base del paquete.`
  },
  {
    id: 3,
    title: "Crear la clase SuscriptorEmail",
    summary: "Implementaras una primera clase con atributos, estado interno y un metodo de actualizacion.",
    why: "Antes de usar patrones de diseno, necesitas dominar como una clase guarda datos y expone comportamiento.",
    body: `## Objetivo
Crear una clase \`SuscriptorEmail\` en \`src/observer_practice/suscriptores.py\`.

## Pasos sugeridos
- Define \`__init__(self, nombre)\`.
- Guarda los atributos \`nombre\`, \`canal\` y \`mensajes\`.
- Usa \`canal = "email"\`.
- Crea el metodo \`actualizar(self, mensaje)\` para agregar mensajes a la lista.
- Agrega \`__str__\` para representar el suscriptor de forma legible.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando pueda crear un \`SuscriptorEmail\` y verificar que guarda mensajes.`
  },
  {
    id: 4,
    title: "Agregar contrato de observador y SuscriptorSMS",
    summary: "Expresaras el contrato de un observador y crearas una segunda clase de suscriptor.",
    why: "Observer funciona mejor cuando todos los observadores comparten una misma operacion esperada.",
    body: `## Objetivo
Crear un contrato para observadores y una clase \`SuscriptorSMS\`.

## Pasos sugeridos
- En \`observer.py\`, define una clase base abstracta o un \`Protocol\` con el metodo \`actualizar(self, mensaje)\`.
- En \`suscriptores.py\`, crea \`SuscriptorSMS\`.
- Usa \`canal = "sms"\`.
- Reutiliza la misma idea de \`mensajes\` y \`actualizar\`.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando existan el contrato de observador y la clase SMS con comportamiento equivalente.`
  },
  {
    id: 5,
    title: "Crear la clase CanalNoticias",
    summary: "Implementaras el sujeto observable que administrara una lista de observadores.",
    why: "El sujeto observable concentra los cambios y evita que cada observador tenga que preguntar por novedades.",
    body: `## Objetivo
Crear \`CanalNoticias\` en \`src/observer_practice/canal.py\`.

## Pasos sugeridos
- Define \`__init__(self, nombre)\`.
- Guarda \`nombre\`, \`observadores\` y \`ultimo_mensaje\`.
- Implementa \`suscribir(self, observador)\`.
- Implementa \`desuscribir(self, observador)\`.
- Evita duplicar el mismo observador.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando la clase pueda suscribir y desuscribir observadores.`
  },
  {
    id: 6,
    title: "Implementar notificacion Observer",
    summary: "Conectaras el canal con sus observadores mediante los metodos notificar y publicar.",
    why: "Este es el corazon del patron: el sujeto avisa a todos los observadores sin conocer sus detalles internos.",
    body: `## Objetivo
Completar el comportamiento Observer.

## Pasos sugeridos
- En \`CanalNoticias\`, crea \`notificar(self, mensaje)\`.
- Recorre los observadores y llama \`actualizar(mensaje)\`.
- Crea \`publicar(self, mensaje)\`.
- Guarda el mensaje en \`ultimo_mensaje\`.
- Llama \`notificar(mensaje)\`.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando un canal pueda publicar mensajes a varios suscriptores y dejar de notificar a quienes fueron desuscritos.`
  },
  {
    id: 7,
    title: "Crear demo ejecutable",
    summary: "Construiras un script pequeno que demuestre el patron funcionando.",
    why: "Una demo concreta permite comprobar el flujo sin leer todas las pruebas.",
    body: `## Objetivo
Crear \`src/main.py\` con una demostracion ejecutable.

## Pasos sugeridos
- Importa \`CanalNoticias\`, \`SuscriptorEmail\` y \`SuscriptorSMS\`.
- Crea un canal.
- Crea al menos dos suscriptores.
- Suscribe ambos al canal.
- Publica un mensaje.
- Imprime los mensajes recibidos.
- Ejecuta \`python src/main.py\`.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando \`src/main.py\` exista y pueda ejecutarse sin errores.`
  },
  {
    id: 8,
    title: "Ejecutar pruebas con pytest",
    summary: "Usaras las pruebas automatizadas para confirmar el comportamiento esperado.",
    why: "Las pruebas convierten la descripcion del patron en criterios verificables.",
    body: `## Objetivo
Lograr que todas las pruebas pasen.

## Pasos sugeridos
- Activa tu entorno virtual.
- Ejecuta \`python -m pytest\`.
- Corrige las clases hasta que la salida muestre pruebas exitosas.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando las pruebas de \`tests/test_observer.py\` pasen correctamente.`
  },
  {
    id: 9,
    title: "Completar README final",
    summary: "Documentaras como instalar, ejecutar, probar y explicar la solucion.",
    why: "Un proyecto con buen codigo tambien debe poder ser entendido y ejecutado por otra persona.",
    body: `## Objetivo
Completar el README con la explicacion final del proyecto.

## Pasos sugeridos
- Revisa que el README conserve la guia completa para estudiantes.
- Explica o ajusta con tus palabras las clases principales.
- Explica quien es el sujeto y quienes son los observadores dentro de \`Implementar Observer paso a paso\`.
- Indica como ejecutar \`python src/main.py\`.
- Indica como ejecutar \`python -m pytest\`.
- Reemplaza el autor pendiente por tus datos.
- Haz commit y push.

## Criterio de cierre
El workflow cerrara este issue cuando el README tenga contenido suficiente y no conserve textos pendientes.`
  },
  {
    id: 10,
    title: "Revisar calificacion sobre 100",
    summary: "Recibiras una calificacion automatica basada en una rubrica de 100 puntos.",
    why: "La calificacion final te muestra que aspectos tecnicos ya estan completos y cuales podrias mejorar.",
    body: `## Objetivo
Consultar la calificacion automatica final de la practica.

## Pasos sugeridos
- Ejecuta manualmente el workflow **Validar progreso de misiones** si este issue no se actualiza solo.
- Revisa el comentario automatico con la rubrica.
- Si el puntaje no llega a 100, corrige los puntos pendientes y vuelve a ejecutar el workflow.

## Criterio de cierre
El workflow cerrara este issue cuando la calificacion automatica sea 100/100. Si el puntaje es menor, dejara el issue abierto con retroalimentacion.`
  }
];

export function missionNumber(id) {
  return String(id).padStart(2, "0");
}

export function missionMarker(id) {
  return `<!-- ${PRACTICE_MARKER}:mission=${id} -->`;
}

export function missionIssueTitle(mission) {
  return `[Mision ${missionNumber(mission.id)}] ${mission.title}`;
}

export function missionIssueBody(mission) {
  return `${missionMarker(mission.id)}

## Resumen rapido
- **Que haras:** ${mission.summary}
- **Por que importa:** ${mission.why}

${mission.body}

## Seguimiento automatico
Cuando avances en esta mision, el workflow **Validar progreso de misiones** intentara revisar los criterios verificables. Si cumple, comentara el resultado, cerrara este issue y creara la siguiente mision. Si no cumple todavia, dejara una checklist breve con lo que falta.

No cierres este issue manualmente. Si se cierra desde la interfaz de GitHub o desde un Pull Request, el workflow **Proteger cierre de misiones** lo reabrira.

---
Practica guiada de clases en Python y patron Observer. Identificador interno: mision ${mission.id}.`;
}

export function getMissionById(id) {
  return missions.find((mission) => mission.id === Number(id));
}

export function getNextMission(id) {
  return getMissionById(Number(id) + 1);
}

export function extractMissionId(text = "") {
  const markerMatch = text.match(/python-classes-practice:mission=(\d+)/i);
  if (markerMatch) {
    return Number(markerMatch[1]);
  }

  const titleMatch = text.match(/\[?Misi[oó]n\s+0?(\d+)\]?/i);
  if (titleMatch) {
    return Number(titleMatch[1]);
  }

  const asciiTitleMatch = text.match(/\[?Mision\s+0?(\d+)\]?/i);
  if (asciiTitleMatch) {
    return Number(asciiTitleMatch[1]);
  }

  return null;
}
