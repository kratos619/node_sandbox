/**
 * @desc  get all bootcamps
 * @route  api/v1/bootcamps
 * @access  Public
 * @type    GET
 */
exports.getBootCamps = (req, res, next) => {
  return res.status(200).json({
    result: "all bootcamps",
  });
};

/**
 * @desc  get single bootcamp
 * @route  api/v1/bootcamps/:id
 * @access  Public
 * @type    GET
 */
exports.getBootCampById = (req, res, next) => {
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
exports.createBootCamp = (req, res, next) => {
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
exports.updateBootCamp = (req, res, next) => {
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
exports.deleteBootCamp = (req, res, next) => {
  return res.status(200).json({
    result: "delete bootcamp",
  });
};
