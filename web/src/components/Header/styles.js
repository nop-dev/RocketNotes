import { styled } from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700 };

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    };

    > div#identify {
        display: flex;
        flex-direction: column;
        margin-left: 16px;

        font-size: 18px;
        line-height: 24px;

        color: ${({theme}) => theme.COLORS.WHITE};

        span {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 14px;
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100 };
    font-size: 36px;
`;