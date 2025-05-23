import ArtistCategory from "../model/ArtistCategoryListModel.js";

export const create = async (req, res) => {
  try {
    const { email } = req.body;
    const artistExist = await ArtistCategory.findOne({ email });
    if (artistExist) {
      return res.status(400).json({ message: "Artist already exists." });
    }
    const newArtist = new ArtistCategory(req.body);
    await newArtist.save();
    res.status(201).json({ message: "Artist created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllArtists = async (req, res) => {
  try {
    const artists = await ArtistCategory.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getArtistById = async (req, res) => {
  try {
    const artist = await ArtistCategory.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.status(200).json(artist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const artist = await ArtistCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.status(200).json({ message: "Artist updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const artist = await ArtistCategory.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found." });
    }
    res.status(200).json({ message: "Artist deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


