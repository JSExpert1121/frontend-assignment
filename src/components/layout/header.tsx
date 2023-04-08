import { iconHome, iconPerson, iconEmoji, iconDiamond } from 'assets/icons';
import { IconButton } from 'components/base/button';
import { Icon } from 'components/base/icon';

const HEADER_ICONS = [
    { id: 1, content: iconHome },
    { id: 2, content: iconPerson },
    { id: 3, content: iconEmoji },
    { id: 4, content: iconDiamond },
]
export const Header = () => (
    <header>
        {HEADER_ICONS.map((icon) => (
            <IconButton>
                <Icon key={icon.id} content={icon.content} />
            </IconButton>
        ))}
    </header>
);
