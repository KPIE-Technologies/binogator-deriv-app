import React from 'react';
import { PropTypes } from 'prop-types';
import { Localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import WorkspaceControl from './workspace-control';
import Footer from './binogatorFooter';

const Binogator = ({ fetchFileContent }) => {
    const [files, setFiles] = React.useState({ code: 0, file: [] });
    const xmlURL = 'https://xml.binogator.live';
    const origin =
        process.env.NODE_ENV !== 'development' ? 'https://trade.binogator.live' : 'https://localhost.binary.sx';

    React.useEffect(() => {
        (async () => {
            try {
                const req = await fetch(xmlURL, {
                    method: 'post',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json', origin },
                });
                const file = await req.json();
                setFiles(file);
            } catch (error) {
                // console.log(error);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getFile(e, workspace) {
        const html = e.target;
        if (!html.classList.contains('load-strategy__recent-item--selected')) {
            html.parentElement
                .querySelectorAll('div')
                .forEach(item => item.classList.remove('load-strategy__recent-item--selected'));
            html.classList.add('load-strategy__recent-item--selected');
        }

        let fileContent = await fetch(`${xmlURL}?file=${workspace}.xml`);
        fileContent = await fileContent.text();
        html.setAttribute('data-xml', fileContent);
        fetchFileContent(fileContent);
    }

    return (
        <div className='load-strategy__container load-strategy__container--has-footer'>
            <div className='load-strategy__recent'>
                <div className='load-strategy__recent-files'>
                    <div className='load-strategy__title'>
                        <Localize i18n_default_text='Strategies' />
                    </div>
                    <div className='load-strategy__recent-files-list'>
                        {files.code === 1 &&
                            files.file.map((workspace, id) => (
                                <div
                                    className='load-strategy__recent-item'
                                    key={id}
                                    onClick={e => getFile(e, workspace)}
                                    name={workspace}
                                >
                                    <div className='load-strategy__recent-item-text'>
                                        <div className='load-strategy__recent-item-title'>{workspace}</div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='load-strategy__recent-preview'>
                    {files.code !== 0 && (
                        <React.Fragment>
                            <div className='load-strategy__title load-strategy__recent-preview-title'>
                                <Localize i18n_default_text='Preview' />
                            </div>
                            <div className='load-strategy__preview-workspace'>
                                <div id='load-strategy__blockly-container' style={{ height: '100%' }}>
                                    <WorkspaceControl />
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
            <div className='load-strategy__local-footer'>
                <Footer />
            </div>
        </div>
    );
};

Binogator.propTypes = {
    fetchFileContent: PropTypes.func,
    is_mobile: PropTypes.bool,
};

export default connect(({ load_modal, ui }) => ({
    is_mobile: ui.is_mobile,
    is_open_button_loading: load_modal.handleFileChange,
    fetchFileContent: load_modal.fetchFileContent,
}))(Binogator);
