/* Service worker ของแอป "เข้า รร.-ติดตาม"
   - ไม่เก็บแคชหน้าเว็บ (โหลดจาก GitHub ทุกครั้ง) เพื่อให้ระบบอัปเดตอัตโนมัติทำงานตามปกติ
   - ถ้าไม่มีอินเทอร์เน็ต แสดงหน้าแจ้งเตือนแทนหน้าว่าง */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;   // ไม่ยุ่งกับการเรียกข้อมูล/รูป
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><html lang="th"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<body style="font-family:sans-serif;text-align:center;padding:48px 20px;background:#f1f5f9;color:#0f172a">' +
    '<img src="icons/icon-192.png" width="96" height="96" alt="" style="border-radius:22px"><h2>ไม่มีการเชื่อมต่ออินเทอร์เน็ต</h2>' +
    '<p>ระบบต้องใช้อินเทอร์เน็ต กรุณาตรวจสอบการเชื่อมต่อแล้วลองใหม่</p>' +
    '<button onclick="location.reload()" style="font-size:16px;padding:10px 22px;border:0;border-radius:8px;background:#1d4ed8;color:#fff">ลองใหม่</button></body></html>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
