// @desc    Get all bootcamps
// @route   GET v1/api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc    Get single bootcamp
// @route   GET v1/api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamp
// @route   POST v1/api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: 'Create new bootcamp' });
};

// @desc    Update bootcamp
// @route   PUT v1/api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Updated bootcamp ${req.params.id}` });
};

// @desc    Delete single bootcamp
// @route   DELETE v1/api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Deleted boocamp ${req.params.id}` });
};
