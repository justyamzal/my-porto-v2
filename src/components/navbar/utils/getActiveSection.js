export function getActiveSection(sectionIds, triggerPoint) {
    let current = sectionIds[0] || 'about' ;

    sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && triggerPoint >= el.offsetTop) current = id
    })
    return current
}