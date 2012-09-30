/**
 * User: KGoulding
 * Date: 9/18/12
 * Time: 11:02 AM
 */
(function () { // self-invoking function
    /**
     * @class SAS.PriorityDef
     **/
    SAS.PriorityDef = function (data) {
        var _self = this;

        //region private fields and methods
        var _defaults = {
            title: "",
            description: "",
            nickname: ""
        };
        var _settings = $.extend({}, _defaults, data);
        //endregion

        //region protected fields and methods (use '_' to differentiate).
        //this._getFoo = function() { ...
        //endregion

        //region public API
        this.getNickname = function () {
            if (_self.nickname && _self.nickname.length > 0) return _self.nickname;
            return _self.title;
        };

        /** @type {String} the title of the priority*/
        this.title = _settings.title;

        /** @type {String} full descriptive text*/
        this.description = _settings.description;

        /** @type {String} a shorter version of the title to help identify this priotity in the UI */
        this.nickname = _settings.nickname;
        //endregion
    }
})();