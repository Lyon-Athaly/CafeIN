import prisma from "../config/prisma.js";

export const getAllMember = async () => {
    const members = await prisma.member.findMany({include: {socials: true}});
    return members;
};

export const getOneMember = async (idMember) => {
    const member = await prisma.member.findUnique({
        where: { id: idMember },
        include: { socials: true },
    });
    return member;
};

export const createMember = async (input) => {
    const member = await prisma.member.create({ 
        data: input,
        include: { socials: true }
    });
    return member;
};

export const editMember = async (idMember, input) => {
    const member = await prisma.member.update({ where: {id: idMember}, data: input });
    return member;
};

export const removeMember = async (idMember) => {
    const member = await prisma.member.delete({ where: {id: idMember} });
    return member;
};
