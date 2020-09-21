class BootCampController {
  /**
   * @desc  get all bootcamps
   * @route  api/v1/bootcamps
   * @access  Public
   * @type    GET
   */
  static getBootCamps = (req, res, next) => {
    return res.status(200).json({
      result: "all bootcamps",
      middleware: req.hello,
    });
  };

  /**
   * @desc  get single bootcamp
   * @route  api/v1/bootcamps/:id
   * @access  Public
   * @type    GET
   */
  static getBootCampById = (req, res, next) => {
    return res.status(200).json({
      result: "single bootcamp",
      param: req.param("id"),
    });
  };

  /**
   * @desc    create new bootcamps
   * @route   api/v1/bootcamps/create
   * @access  Private
   * @type    POST
   */
  static createBootCamp = (req, res, next) => {
    return res.status(200).json({
      result: "create bootcamp",
    });
  };

  /**
   * @desc    update bootcamps
   * @route   api/v1/bootcamps/update
   * @access  Private
   * @type    POST
   */
  static updateBootCamp = (req, res, next) => {
    return res.status(200).json({
      result: "update bootcamp",
    });
  };

  /**
   * @desc    delete bootcamp
   * @route   api/v1/bootcamps/delete
   * @access  Private
   * @type    POST
   */
  static deleteBootCamp = (req, res, next) => {
    return res.status(200).json({
      result: "delete bootcamp",
    });
  };
}

module.exports = BootCampController;
