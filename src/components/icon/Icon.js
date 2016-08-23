/**
 * Clone of react-bootstrap's v0.30.3 Glyphicon, adapted to use FontAwesome.
 *
 * It uses an icon instead of a span, uses the classes 'fa fa-{iconName}', and
 * adds the attribute aria-hidden="true".
 */
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import classNames from 'classnames';
import React from 'react';

import { bsClass, getClassSet, prefix, splitBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

var propTypes = {
  /**
   * An icon name. See e.g. http://getbootstrap.com/components/#glyphicons
   */
  icon: React.PropTypes.string.isRequired
};

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Icon.prototype.render = function render() {
    var _extends2;

    var _props = this.props;
    var icon = _props.icon;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['icon', 'className']);

    var _splitBsProps = splitBsProps(props);

    var bsProps = _splitBsProps[0];
    var elementProps = _splitBsProps[1];


    var classes = _extends({}, getClassSet(bsProps), (_extends2 = {}, _extends2[prefix(bsProps, icon)] = true, _extends2));

    return React.createElement('i', _extends({}, elementProps, {
      className: classNames(className, classes),
      'aria-hidden': true
    }));
  };

  return Icon;
}(React.Component);

Icon.propTypes = propTypes;

export default bsClass('fa', Icon);