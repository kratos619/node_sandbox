const BootCampSchema = require("../models/BootCamp");
class BootCampController {
  /**
   * @desc  get all bootcamps
   * @route  api/v1/bootcamps
   * @access  Public
   * @type    GET
   */
  static getBootCamps = async (req, res, next) => {
    try {
      const bootCamps = await BootCampSchema.find();
      return res.status(200).json({
        success: true,
        data: bootCamps,
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        error: error,
      });
    }
  };

  /**
   * @desc  get single bootcamp
   * @route  api/v1/bootcamps/:id
   * @access  Public
   * @type    GET
   */
  static getBootCampById = async (req, res, next) => {
    let selectedId = req.params.id;
    try {
      const bootCamps = await BootCampSchema.findById(selectedId);
      return res.status(200).json({
        success: true,
        data: bootCamps || "no data found",
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        error: error,
      });
    }
  };

  /**
   * @desc    create new bootcamps
   * @route   api/v1/bootcamps/create
   * @access  Private
   * @type    POST
   */
  static createBootCamp = async (req, res, next) => {
    try {
      const createBootcamp = await BootCampSchema.create(req.body);
      return res.status(200).json({
        success: true,
        message: "bootcamp created",
        createBootcamp,
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error,
      });
    }
  };

  /**
   * @desc    update bootcamps
   * @route   api/v1/bootcamps/update
   * @access  Private
   * @type    POST
   */
  static updateBootCamp = async (req, res, next) => {
    try {
      const updateSelected = await BootCampSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      return res.status(200).json({
        success: true,
        message: "message",
        data: updateSelected,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  };

  /**
   * @desc    delete bootcamp
   * @route   api/v1/bootcamps/delete
   * @access  Private
   * @type    POST
   */
  static deleteBootCamp = async (req, res, next) => {
    try {
      const updateSelected = await BootCampSchema.findByIdAndDelete(
        req.params.id
      );
      return res.status(200).json({
        success: true,
        message: "message",
        data: updateSelected,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error,
      });
    }
  };
}

module.exports = BootCampController;
