import { createMenu, editMenu, getAllMenu, getOneMenu, removeMenu } from "../model/menuModel.js";
import prisma from "../config/prisma.js";

export const getMenu = async (req, res) => {
  try {
    const { idMenu } = req.params;

    // jika ada idMenu jalankan getOneMenu
    if (idMenu) {
      const menuItem = await getOneMenu(idMenu);
      if (!menuItem) {
        return res.status(404).json({ message: "Menu not found" });
      }
      return res.status(200).json(menuItem);
    }

    // jika tidak langsung jalankan getAllMenu
    const menuList = await getAllMenu();
    return res.status(200).json(menuList);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
  
};

export const addMenu = async (req, res) => {

  try {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.filename : null;

    const menuData = {
      name,
      description,
      price: parseInt(price),
      image,
    };

    const menu = await createMenu(menuData);

    res.status(201).json({ message: "Add success", data: menu });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
  
};

export const updateMenu = async (req, res) => {
  try {
    const { idMenu } = req.params
    const { name, description, price } = req.body;
    let image;
    if (req.file) {
      image = req.file.filename;
    }

    const updateData = {
      name,
      description,
      price: price ? parseInt(price) : undefined,
      ...(image && { image }), // Hanya masukkan field image jika ada file baru
    };

    const newData = await editMenu(idMenu, updateData);

    res.status(200).json({
      message: "Edit success",
      data: newData,
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    const { idMenu } = req.params;
    const target = await removeMenu(idMenu)

    res.json("delete sukses");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};
