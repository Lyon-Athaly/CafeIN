import { createMember, editMember, getAllMember, getOneMember, removeMember } from "../model/memberModel.js";

export const getMember = async (req, res) => {
  try {
    const { idMember } = req.params;

    // jika ada idMember jalankan getOneMember
    if (idMember) {
      const memberItem = await getOneMember(idMember);
      if (!memberItem) {return res.status(404).json({ message: "Member not found" });}
      return res.status(200).json(memberItem);
    }

    // jika tidak langsung jalankan getAllMember
    const memberList = await getAllMember();
    return res.status(200).json(memberList);

    } catch (error) {
        console.error(error);
        res.status(500).json({
        message: "Server Error",
        serverMessage: error.message,
        });
    }
  
};

export const addMember = async (req, res) => {

  try {
    const { name, role, image, socials } = req.body;
    // const image = req.file ? req.file.filename : null;

    const parsedSocials = typeof socials === 'string' ? JSON.parse(socials) : socials;

    const memberData = {
      name,
      role,
      image,
      socials: {create: parsedSocials}
    };

    const member = await createMember(memberData);

    res.status(201).json({
        message: "Add success",
        data: member,
      });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message,
        });
    }
  
};

export const updateMember = async (req, res) => {
    try {
        const { idMember } = req.params
        const { name, role } = req.body;
        let image;
        
        if (req.file) {image = req.file.filename;}

        const updateData = {
            name,
            role,
            ...(image && { image }), // Hanya masukkan field image jika ada file baru
        };

        const newData = await editMember(idMember, updateData);

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

export const deleteMember = async (req, res) => {
    try {
        const { idMember } = req.params;
        const target = await removeMember(idMember)

        res.json("delete sukses");
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message,
        });
    }
};
