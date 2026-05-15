import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export default async function Image({ params }: { params: { username: string } }) {
  const { username } = params;

  // 폰트 로드 (Noto Sans KR)
  const fontData = await fetch(
    new URL('https://fonts.gstatic.com/s/notosanskr/v34/P6xlzZ38fVf7CkvOp829wOqvM2Y3.ttf', 'https://fonts.googleapis.com')
  ).then((res) => res.arrayBuffer());

  // 임시 데이터 (실제로는 DB 등에서 조회)
  const name = "함준식";
  const bio = "꿈을 현실로 만드는 개발자입니다. 새로운 기술과 디자인의 조화를 연구합니다.";
  const linkCount = 5;
  const avatarUrl = "https://github.com/shadcn.png";

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#5B5FC7',
          color: 'white',
          fontFamily: 'Noto Sans KR',
          padding: '80px',
        }}
      >
        {/* 중앙 프로필 카드 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '40px',
            padding: '60px',
            width: '100%',
            maxWidth: '1000px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* 아바타와 이름/배지 */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <img
              src={avatarUrl}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '70px',
                marginRight: '40px',
                border: '4px solid white',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ fontSize: '64px', fontWeight: 700, marginRight: '20px' }}>
                  {name}
                </div>
                <div
                  style={{
                    background: '#white',
                    color: '#5B5FC7',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '24px',
                    fontWeight: 700,
                  }}
                >
                  {linkCount}개의 링크
                </div>
              </div>
              <div style={{ fontSize: '32px', color: 'rgba(255, 255, 255, 0.8)' }}>
                @{username}
              </div>
            </div>
          </div>

          {/* 소개글 */}
          <div
            style={{
              fontSize: '36px',
              textAlign: 'center',
              lineHeight: 1.5,
              maxWidth: '800px',
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            {bio}
          </div>
        </div>

        {/* 하단 브랜딩 */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '1000px',
          }}
        >
          <div style={{ fontSize: '32px', fontWeight: 700, opacity: 0.8 }}>마이링크</div>
          <div style={{ fontSize: '24px', opacity: 0.6 }}>mylink.com/{username}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Noto Sans KR',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}

