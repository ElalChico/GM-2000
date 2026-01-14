import React from 'react';

const SettingsPanel = ({ isMobile, ...props }) => {
    return (
        <div className="settings-panel">
            {isMobile && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                        <a href="https://github.com/tu-repo" target="_blank" rel="noopener noreferrer">
                            <button>GitHub</button>
                        </a>
                        <a href="https://discord.gg/tu-servidor" target="_blank" rel="noopener noreferrer">
                            <button>Discord</button>
                        </a>
                    </div>
                    <span style={{ fontSize: 12, color: '#888' }}>Creado por S4mØth</span>
                </div>
            )}
            <h2>PERSONALIZACIÓN VISUAL</h2>
            {/* ...existing code... */}
        </div>
    );
};

export default SettingsPanel;