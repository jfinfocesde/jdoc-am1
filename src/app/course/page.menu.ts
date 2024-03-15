interface subItemsInfoType {
    href: string,
    label: string,
    date: string,
}

interface itemsInfoType {
    href: string,
    label: string,
    date: string,
    submenu: subItemsInfoType[]
}

export const modedev = false

export const infoCourse = {
    title: "Programación de Aplicaciones Móviles I",
    description: "En este curso, aprenderás a crear aplicaciones móviles Android utilizando la Programación Orientada a Objetos (POO) y Android Studio, el entorno de desarrollo oficial de Google. A través de un enfoque práctico y guiado, adquirirás las habilidades y conocimientos necesarios para convertirte en un desarrollador Android capaz de crear aplicaciones atractivas, eficientes y escalables.",
    image: "https://www.softzone.es/app/uploads-softzone.es/2021/05/Android-Developer.jpg"
}

export const itemsInfo: itemsInfoType[] = [
    {
        href: "/course",
        label: "Introducción",
        date: '2024-2-15',
        submenu: []
    },
    {
        href: "/course/contents/semana1",
        label: "Semana 1",
        date: '2024-2-15',
        submenu: [
            {
                href: "/course/contents/semana1",
                label: "Pacto pedagógico",
                date: '2024-2-15',
            },
            // {
            //     href: "/course/activities/actividad1",
            //     label: "Actividad 1",
            //     date: '2024-2-22',
            // },           
        ]
    },
    {
        href: "",
        label: "Semana 2",
        date: '2024-2-22',
        submenu: [
            {
                href: "/course/contents/semana2",
                label: "Contenido",
                date: '2024-2-22',
            },
            {
                href: "/course/activities/actividad1",
                label: "Actividad 1",
                date: '2024-2-22',
            },
        ]
    },
    {
        href: "",
        label: "Semana 3",
        date: '2024-2-29',
        submenu: [
            {
                href: "/course/contents/semana3",
                label: "Contenido",
                date: '2024-2-29',
            },
            {
                href: "/course/activities/actividad2",
                label: "Actividad 2",
                date: '2024-2-29',
            },
        ]
    },
    {
        href: "",
        label: "Semana 4",
        date: '2024-3-8',
        submenu: [
            {
                href: "/course/contents/semana4",
                label: "Contenido",
                date: '2024-3-8',
            },
            // {
            //     href: "/course/activities/actividad2",
            //     label: "Actividad 2",
            //     date: '2024-3-8',
            // },
        ]
    },    
    {
        href: "",
        label: "Semana 5",
        date: '2024-3-16',
        submenu: [
            {
                href: "/course/contents/semana5",
                label: "Contenido",
                date: '2024-3-16',
            },
            {
                href: "/course/activities/actividad3",
                label: "Actividad 3",
                date: '2024-3-16',
            },
        ]
    },    
]
