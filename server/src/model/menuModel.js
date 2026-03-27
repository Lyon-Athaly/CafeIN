import prisma from "../config/prisma.js"

export const getAllMenu = async () => {
    const menus = await prisma.menu.findMany() 

    return menus
}

export const getOneMenu = async (idMenu) => {
    const menu = await prisma.menu.findUnique({
        where: {idMenu}
    })

    return menu
}