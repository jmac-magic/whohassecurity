// Load and display protocols from JSON file
async function loadProtocols() {
    try {
        const response = await fetch('data/protocols.json');
        if (!response.ok) {
            throw new Error('Failed to load protocols');
        }

        const protocols = await response.json();

        // Sort protocols alphabetically by name (case-insensitive)
        protocols.sort((a, b) => a.name.localeCompare(b.name));

        // Get the protocol list element
        const protocolList = document.getElementById('protocol-list');

        // Clear any existing content
        protocolList.innerHTML = '';

        // Create list items for each protocol
        protocols.forEach(protocol => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            // Create shield icon SVG
            const shieldIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            shieldIcon.setAttribute('class', 'shield-icon');
            shieldIcon.setAttribute('fill', 'none');
            shieldIcon.setAttribute('viewBox', '0 0 24 24');
            shieldIcon.setAttribute('stroke', 'currentColor');
            shieldIcon.setAttribute('stroke-width', '2');
            const shieldPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            shieldPath.setAttribute('stroke-linecap', 'round');
            shieldPath.setAttribute('stroke-linejoin', 'round');
            shieldPath.setAttribute('d', 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z');
            shieldIcon.appendChild(shieldPath);

            // Create protocol name span
            const nameSpan = document.createElement('span');
            nameSpan.className = 'protocol-name';
            nameSpan.textContent = protocol.name;

            // Create external link icon SVG
            const externalIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            externalIcon.setAttribute('class', 'external-link-icon');
            externalIcon.setAttribute('fill', 'none');
            externalIcon.setAttribute('viewBox', '0 0 24 24');
            externalIcon.setAttribute('stroke', 'currentColor');
            externalIcon.setAttribute('stroke-width', '2');
            const externalPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            externalPath.setAttribute('stroke-linecap', 'round');
            externalPath.setAttribute('stroke-linejoin', 'round');
            externalPath.setAttribute('d', 'M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25');
            externalIcon.appendChild(externalPath);

            a.href = protocol.website;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';

            a.appendChild(shieldIcon);
            a.appendChild(nameSpan);
            a.appendChild(externalIcon);
            li.appendChild(a);
            protocolList.appendChild(li);
        });

    } catch (error) {
        console.error('Error loading protocols:', error);
        const protocolList = document.getElementById('protocol-list');
        protocolList.innerHTML = '<li style="grid-column: 1 / -1; text-align: center; color: #888;">Unable to load protocols. Please try again later.</li>';
    }
}

// Load protocols when the page loads
document.addEventListener('DOMContentLoaded', loadProtocols);
