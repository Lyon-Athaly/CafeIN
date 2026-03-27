import { getAllMenu } from "../model/menuModel.js";

export const getMenu = async (req, res) => {
  const menuList = await getAllMenu()

  try {

    res.status(201).json(menuList)
  } catch (error) {
    res.status(404).json(error)
  }
  
};

export const addMenu = async (req, res) => {
  const menu = req.body

  try {
    
  } catch (error) {
        
  }
    res.json("add sukses");
};

export const updateMenu = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
  res.json("update sukses");
};

export const deleteMenu = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
  res.json("delete sukses");
};
