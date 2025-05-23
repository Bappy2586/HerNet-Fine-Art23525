import Artist from "../model/artistModel.js"

export const create = async (req, res) => {
    try {
        const newArtist = new Artist(req.body);
        const savedData = await newArtist.save();
        res.status(200).json({ message: "User created successfully" });

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getAllArtist = async (req, res) => {
    try {
        const artistData = await Artist.find();
        if (!artistData || artistData.length === 0) {
            return res.status(404).json({ message: "User data not found." });
        }
        res.status(200).json(artistData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getArtistById = async (req, res) => {
    try {
        const id = req.params.id;
        const artistExist = await Artist.findById(id);
        if (!artistExist) {
            return res.status(404).json({ message: "Artist not found" });
        }
        res.status(200).json(artistExist);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const artistExist = await Artist.findById(id);
        if (!artistExist) {
            return res.status(404).json({ message: "Artist not found" });
        }
        const updatedData = await Artist.findByIdAndUpdate(id, req.body, {
            new: true
        })
        // res.status(200).json(updatedData);
        res.status(200).json({ message: "Artist updated successfully" });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const deleteArtist = async (req, res) => {
    try {
        const id = req.params.id;
        const artistExist = await Artist.findById(id);
        if (!artistExist) {
            return res.status(404).json({ message: "Artist not found" });
        }
        await Artist.findByIdAndDelete(id);
        res.status(200).json({ message: "Artist deleted successfully" })
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}