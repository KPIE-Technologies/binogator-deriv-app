import React from 'react';
import { Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import { PropTypes } from 'mobx-react';
import { connect } from 'Stores/connect';

const Footer = ({ is_mobile, loadFileToWorkSpace, toggleLoadModal }) => {
    const Wrapper = is_mobile ? Button.Group : React.Fragment;

    const event = () => {
        const doc = document.getElementsByClassName('load-strategy__recent-item--selected').item(0);
        const name = doc.getAttribute('name');
        const xml = doc.getAttribute('data-xml');
        loadFileToWorkSpace({ xml, name });
    };

    return (
        <Wrapper>
            {is_mobile && (
                <Button text={localize('Cancel')} onClick={() => toggleLoadModal()} has_effect secondary large />
            )}
            <Button text={localize('Open')} onClick={event} has_effect primary large />
        </Wrapper>
    );
};

Footer.prototype = {
    is_mobile: PropTypes.bool,
    is_open_button_loading: PropTypes.bool,
    loadFileToWorkSpace: PropTypes.func,
    toggleLoadModal: PropTypes.func,
};

export default connect(({ load_modal, ui }) => ({
    is_mobile: ui.is_mobile,
    is_open_button_loading: load_modal.is_open_button_loading,
    loadFileToWorkSpace: load_modal.loadFileToWorkSpace,
    toggleLoadModal: load_modal.toggleLoadModal,
}))(Footer);
