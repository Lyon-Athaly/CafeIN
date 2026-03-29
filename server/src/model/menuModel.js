import prisma from "../config/prisma.js"

export const getAllMenu = async () => {
    const menus = await prisma.menu.findMany()

    return menus
}

export const getOneMenu = async (idMenu) => {
    const menu = await prisma.menu.findUnique({
        where: {id: idMenu}
    })
    return menu
}

export const createMenu = async (input) => {
    const menu = await prisma.menu.create({data: input})

    return menu
}

export const editMenu = async (idMenu, input) => {
    const menu = await prisma.menu.update({
        where: {id: idMenu},
        data: input
    });
    return menu;
}

export const removeMenu = async (idMenu) => {
    const menu = await prisma.menu.delete({
        where: {id: idMenu}
    })
    return menu
}